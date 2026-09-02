"""Prepare medical-aid logo PNGs: flood-fill black backgrounds to transparent."""
from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "images" / "medical-aids"


def flood_knockout(im: Image.Image, threshold: int = 38) -> Image.Image:
    im = im.convert("RGBA")
    w, h = im.size
    px = im.load()

    def is_bg(x: int, y: int) -> bool:
        r, g, b, a = px[x, y]
        return a > 0 and r < threshold and g < threshold and b < threshold

    q: deque[tuple[int, int]] = deque()
    seen = [[False] * w for _ in range(h)]
    for start in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)):
        q.append(start)

    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or seen[y][x]:
            continue
        seen[y][x] = True
        if not is_bg(x, y):
            continue
        px[x, y] = (0, 0, 0, 0)
        q.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    pad = 16
    canvas = Image.new("RGBA", (im.width + pad * 2, im.height + pad * 2), (0, 0, 0, 0))
    canvas.paste(im, (pad, pad), im)
    return canvas


def save(src: str, dest: str) -> None:
    path = ROOT / src
    out = ROOT / dest
    img = flood_knockout(Image.open(path))
    # Upscale small logos so they stay sharp on retina
    if max(img.size) < 400:
        img = img.resize((img.width * 2, img.height * 2), Image.Resampling.LANCZOS)
    img.save(out, "PNG", optimize=True)
    print("WROTE", out.name, img.size)


def main() -> None:
    save("psmas-src.png", "psmas.png")
    save("fidelity-icon.png", "fidelity-life.png")
    save("budget-ico.png", "budget-health.png")
    save("fbc-src.png", "fbc-health.png")
    save("cellmed-src.png", "cellmed-health.png")
    save("first-mutual-src.png", "first-mutual-health.png")
    save("ultra-med-src.png", "ultra-med.png")


if __name__ == "__main__":
    main()
