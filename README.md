# CGPA to Percentage Converter for Savitribai Phule Pune Univarsity

This is a simple web application that converts CGPA (Cumulative Grade Point Average) to percentage based on specific conversion rules. It also provides the corresponding grade for the entered CGPA.

## Features

- Convert CGPA to percentage
- Display corresponding grade
- Copy values to clipboard
- Responsive design

## Conversion Rules

The conversion rules used in this application are based on SPPU FE 2019 rulebook and circular no. 322/2020.

-----------------------------------------------------------
| CGPA Range | Grade | Percentage Formula                 |
|------------|-------|------------------------------------|
| 9.0 - 10.0 | O     | `Percentage = 20 * CGPA - 100`     |
| 8.0 - 8.9  | A+    | `Percentage = 12 * CGPA - 25`      |
| 7.0 - 7.9  | A     | `Percentage = 10 * CGPA - 7.5`     |
| 6.0 - 6.9  | B+    | `Percentage = 5 * CGPA + 26.25`    |
| 5.0 - 5.9  | B     | `Percentage = 10 * CGPA - 2.5`     |
| 4.0 - 4.9  | C     | `Percentage = 10 * CGPA - 2.5`     |
| 3.0 - 3.9  | D     | `Percentage = 6.6 * CGPA + 13.6`   |
| 0.0 - 2.9  | F     | `Percentage = 0`                   |
-----------------------------------------------------------
