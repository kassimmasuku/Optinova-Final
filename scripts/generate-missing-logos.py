"""Generate SVG wordmark logos for providers without downloadable assets."""
import os

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "logos")

BRANDS = [
    ("tom-ford", "TOM FORD", "#1a1a1a", "#1a1a1a"),
    ("police", "POLICE", "#111111", "#111111"),
    ("stepper", "Stepper", "#006837", "#006837"),
]


def svg_wordmark(filename: str, text: str, color: str, _fg: str, outdir: str) -> None:
    parts = text.split(" ", 1)
    if len(text) > 14 and len(parts) > 1:
        line1, line2 = parts[0], parts[1]
        tspans = (
            f'<tspan x="120" y="52">{line1}</tspan>'
            f'<tspan x="120" y="78">{line2}</tspan>'
        )
        fs = 22
    else:
        tspans = f'<tspan x="120" y="68">{text}</tspan>'
        fs = 26

    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" role="img">
  <text x="120" y="68" text-anchor="middle" fill="{color}" font-family="Montserrat, Arial, sans-serif" font-weight="700" font-size="{fs}">{tspans}</text>
</svg>'''
    path = os.path.join(outdir, f"{filename}.svg")
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("WROTE", path)


def main() -> None:
    brand_dir = os.path.join(ROOT, "brands")
    os.makedirs(brand_dir, exist_ok=True)

    for fid, text, bg, fg in BRANDS:
        svg_wordmark(fid, text, bg, fg, brand_dir)


if __name__ == "__main__":
    main()
