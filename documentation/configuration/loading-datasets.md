---
title: Loading Datasets
---

# Datasets

Surmai includes three pre-configured reference datasets:

- **World Airports**: Contains airport data including codes, locations, and other relevant information. Credit [OurAirports](https://ourairports.com/data/)
- **World Airlines**: Contains airline data including codes, names, and other relevant information. Credit [countries-states-cities-database](https://github.com/dr5hn/countries-states-cities-database)
- **World Places**: Contains geographical location data including cities, countries, and timezone information. Credit [dotmarn/Airlines](https://github.com/dotmarn/Airlines)

These datasets are static reference data that require manual activation. While Surmai functions without these datasets,
they provide essential reference data that enhances application functionality. For example, the World Places dataset
provides timezone information necessary for accurate calendar exports.

## Dataset Integration

The datasets are packaged with the application but not automatically loaded into the database to optimize initial
deployment performance and allow administrators to selectively enable required datasets.

## Loading Datasets

To activate the datasets:

1. Sign in with administrator credentials
2. Navigate to the Settings page
3. Select the "Datasets" tab
4. Click the "Load..." button for each dataset you wish to activate

**Note**: If a dataset has already been loaded, the corresponding "Load..." button will not be displayed.
