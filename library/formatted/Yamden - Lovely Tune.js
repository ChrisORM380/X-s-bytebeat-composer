t %= 96E3,
(t > 0) * (t < 4E3) * (
	(1.0 * t & 32) +
	(1.25 * t & 32) +
	(1.5 * t & 32) +
	(1.01 * t & 32) +
	(1.2625 * t & 32) +
	(1.515 * t & 32)
) +
(t > 4E3) * (t < 8E3) * (
	(1.0 * t & 32) +
	(4 / 3 * t & 32) +
	(5 / 3 * t & 32) +
	(1.01 * t & 32) +
	(4.04 / 3 * t & 32) +
	(5.05 / 3 * t & 32)
) +
(t > 8E3) * (t < 1E4) * (
	(1.0 * t & 32) +
	(1.25 * t & 32) +
	(1.5 * t & 32) +
	(1.01 * t & 32) +
	(1.2625 * t & 32) +
	(1.515 * t & 32)
) +
(t > 1E4) * (t < 11E3) * 0 +
(t > 11E3) * (t < 12E3) * (2.0 * t & 32) +
(t > 12E3) * (t < 13E3) * (3.0 * t & 32) +
(t > 13E3) * (t < 14E3) * (2.0 * t & 32) +
(t > 14E3) * (t < 15E3) * (3.0 * t & 32) +
(t > 15E3) * (t < 16E3) * (2.0 * t & 32) +
(t > 16E3) * (t < 17E3) * (3.0 * t & 32) +
(t > 17E3) * (t < 18E3) * 0 +
(t > 18E3) * (t < 2E4) * (
	(1.0 * t & 32) +
	(1.25 * t & 32) +
	(1.5 * t & 32) +
	(1.01 * t & 32) +
	(1.2625 * t & 32) +
	(1.515 * t & 32)
) +
(t > 2E4) * (t < 24E3) * (
	(1.0 * t & 32) +
	(4 / 3 * t & 32) +
	(5 / 3 * t & 32) +
	(1.01 * t & 32) +
	(4.04 / 3 * t & 32) +
	(5.05 / 3 * t & 32)
) +
(t > 24E3) * (t < 26E3) * (
	(1.0 * t & 32) +
	(1.25 * t & 32) +
	(1.5 * t & 32) +
	(1.01 * t & 32) +
	(1.2625 * t & 32) +
	(1.515 * t & 32)
) +
(t > 26E3) * (t < 27E3) * 0 +
(t > 27E3) * (t < 28E3) * (2.0 * t & 32) +
(t > 28E3) * (t < 29E3) * (3.0 * t & 32) +
(t > 29E3) * (t < 3E4) * (2.0 * t & 32) +
(t > 3E4) * (t < 31E3) * (1.5 * t & 32) +
(t > 31E3) * (t < 32E3) * (2.0 * t & 32) +
(t > 32E3) * (t < 33E3) * ((4.0 * t & 32) + (1.5 * t & 32)) +
(t > 33E3) * (t < 34E3) * (1.0 * t & 32) +
(t > 34E3) * (t < 35E3) * (1.5 * t & 32) +
(t > 35E3) * (t < 36E3) * (2.0 * t & 32) +
(t > 36E3) * (t < 37E3) * (2.5 * t & 32) +
(t > 37E3) * (t < 38E3) * (3.0 * t & 32) +
(t > 38E3) * (t < 39E3) * (3.75 * t & 32) +
(t > 39E3) * (t < 4E4) * (4.0 * t & 32) +
(t > 4E4) * (t < 41E3) * (
	(5.0 * t & 32) +
	(10 / 3 * t & 32) +
	(4.0 * t & 32)
) +
(t > 41E3) * (t < 42E3) * 0 + (t > 42E3) * (t < 43E3) * (
	(5.0 * t & 32) +
	(10 / 3 * t & 32) +
	(3.75 * t & 32)
) +
(t > 43E3) * (t < 44E3) * 0 + (t > 44E3) * (t < 46E3) * (
	(5.0 * t & 32) +
	(3.2 * t & 32) +
	(8 / 3 * t & 32) +
	(4.0 * t & 32)
) +
(t > 46E3) * (t < 47E3) * (
	(4.5 * t & 32) +
	(3.2 * t & 32) +
	(8 / 3 * t & 32) +
	(4.0 * t & 32)
) +
(t > 47E3) * (t < 48E3) * 0 + (t > 48E3) * (t < 49E3) * (
	(5.0 * t & 32) +
	(4.0 * t & 32) +
	(3.0 * t & 32) +
	(2.5 * t & 32) +
	(2.0 * t & 32)
) +
(t > 49E3) * (t < 5E4) * (1.0 * t & 32) +
(t > 5E4) * (t < 51E3) * (1.5 * t & 32) +
(t > 51E3) * (t < 52E3) * (2.0 * t & 32) +
(t > 52E3) * (t < 53E3) * (2.5 * t & 32) +
(t > 53E3) * (t < 54E3) * (3.0 * t & 32) +
(t > 54E3) * (t < 55E3) * (3.75 * t & 32) +
(t > 55E3) * (t < 56E3) * (4.0 * t & 32) +
(t > 56E3) * (t < 57E3) * (
	(5.0 * t & 32) +
	(10 / 3 * t & 32) +
	(4.0 * t & 32)
) +
(t > 57E3) * (t < 58E3) * 0 + (t > 58E3) * (t < 59E3) * (
	(5.0 * t & 32) +
	(10 / 3 * t & 32) +
	(3.75 * t & 32)
) +
(t > 59E3) * (t < 6E4) * 0 + (t > 6E4) * (t < 62E3) * (
	(5.0 * t & 32) +
	(3.2 * t & 32) +
	(8 / 3 * t & 32) +
	(4.0 * t & 32)
) +
(t > 62E3) * (t < 63E3) * (
	(4.5 * t & 32) +
	(3.2 * t & 32) +
	(8 / 3 * t & 32) +
	(4.0 * t & 32)
) +
(t > 63E3) * (t < 64E3) * 0 + (t > 64E3) * (t < 68E3) * (
	(5.0 * t & 32) +
	(4.0 * t & 32) +
	(3.0 * t & 32) +
	(2.5 * t & 32) +
	(2.0 * t & 32)
) +
(t > 68E3) * (t < 72E3) * (
	(4.0 * t & 32) +
	(10 / 3 * t & 32) +
	(2.5 * t & 32) +
	(1.5 * t & 32)
) +
(t > 72E3) * (t < 76E3) * (
	(4.5 * t & 32) +
	(4.0 * t & 32) +
	(8 / 3 * t & 32) +
	(1.6 * t & 32)
) +
(t > 76E3) * (t < 8E4) * (
	(4.5 * t & 32) +
	(4.0 * t & 32) +
	(3.2 * t & 32) +
	(4 / 3 * t & 32)
) +
(t > 8E4) * (t < 81E3) * (
	(4.0 * t & 32) +
	(3.0 * t & 32) +
	(2.5 * t & 32) +
	(1.0 * t & 32)
);
