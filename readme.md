# standard-text

Convert text to standard version.

## Usage

```
var standard = require('standard-text');
var text = 'Ţăpuşor';
var language = 'ro';
var text = standard(text, language);
// text = 'Țăpușor'; Convert `Ţ` to `Ț` and `ş` to `ș`.
```
