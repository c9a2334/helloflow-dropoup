# Dropout react component
## Usage

```js
    <Dropout steps={this.state.steps}/>
```

Where the `steps` is an array of objects:
```js
[
    {title: 'Contact info', type: 'normal', percentage: 95},
    {title: 'NemID', type: 'service', percentage: 80},
    {title: 'Personal address', type: 'qwe', percentage: 45},
    {title: 'Documents', type: 'asd', percentage: 60},
    {title: 'Financial info', type: 'normal', percentage: 60},
]
```
Object properties:
* title: text displayed in a div element
* percentage: height of a div element responsively to parent height
* type: affect on background-color of a div (*normal*: **#d7ebff**, *service*: **#d4eeea**, everything else: **#ffeac2**)