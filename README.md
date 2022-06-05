# Brolga Icons

## Installation
Add package via npm or yarn

``` zsh
# npm
npm install brolga-icons

# yarn
yarn add brolga-icons
```

## Using
Import icons as React Components

``` javascript
import { User } from 'brolga-icons'

export default MyFunction = () => {
    return (
        <div>
            <User />
        </div>
    )
}
```

## Options
Each icon component can take several optional props.

| Prop      | Description | Default |
| ----------- | ----------- | --- |
| size      | sets the width and height of the icon| 20px |
| stroke   | sets the stroke width of the icon | 2 |
| color | sets the color of the icon | black |

``` javascript
import { User } from 'brolga-icons'

export default MyFunction = () => {
    return (
        <div>
            <User size='30px' stroke={4} color='#fff'/>
        </div>
    )
}
```

## Enjoy!
It's nice when things just work, and that's what we're aiming for with this icon library. Let us hear your feedback!