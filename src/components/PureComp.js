import React, { PureComponent } from 'react';

class PureComp extends PureComponent {    
    render() {
        console.log('Pure Comp render')
        return (
            <div>
                Pure Component
            </div>
        );
    }
}

export default PureComp;