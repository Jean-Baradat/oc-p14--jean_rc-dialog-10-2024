<p align="center">
  <img alt="Dialog React" src="https://github.com/user-attachments/assets/91f50838-cce3-4cb4-bfe0-44f84974f9b2">
</p>

<div align="center">

![License MIT](https://img.shields.io/badge/license-MIT-red.svg)
![React 18](https://img.shields.io/badge/React-18.0.0-orange)
![Node 20](https://img.shields.io/badge/node-20.11.0-yellow)
![Vite 5](https://img.shields.io/badge/vite-5.4.1-green)

[Live demo and full doc](https://jean-baradat.github.io/oc-p14--jean_rc-dialog-10-2024/)

</div>

# Dialog React

Dialog React is a React library created for the OpenClassrooms P14 project. It provides a simple and customizable dialog component.

## Installation

Install the package with `npm`:

```bash
npm i @jean_b/rc-dialog
```

## Usage

Import the necessary components:

```JSX
import { Dialog, DialogTrigger, DialogContent } from "@jean_b/rc-dialog"
```

Manage the open/close state of the dialog:

```JSX
const [isOpen, setIsOpen] = useState(false)
```

Use the `Dialog`, `DialogTrigger` and `DialogContent` components to create your dialog:

```JSX
<Dialog 
    isOpen={isOpen} 
    setIsOpen={setIsOpen}
>
    <DialogTrigger onClick>
        <button>
            Open simple dialog
        </button>
    </DialogTrigger>
    <DialogContent titleId="dialogTitle" descriptionId="dialogDescription">
        <h1 id="dialogTitle">
            Dialog title...
        </h1>
        <p id="dialogDescription">
            Dialog description...
        </p>
    </DialogContent>
</Dialog>
```

## Examples

You can find usage examples in the [interactive demo](https://jean-baradat.github.io/oc-p14--jean_rc-dialog-10-2024/)

## Contribution

If you want to contribute to this project, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/Jean-Baradat/oc-p14--jean_rc-dialog-10-2024).

## License
[This project](https://github.com/Jean-Baradat/oc-p14--jean_rc-dialog-10-2024) is under the MIT license.
