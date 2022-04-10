import * as React from 'react';

export default function ElevateAppBar({style}) {
  return (
    <React.Fragment>
        <div className={style.TopBar}>
            <p className={style.Text}>
                <span className={style.Bold}>
                    FREE SHIPPING {' '}
                </span>   
                Anywhere in the world, no minimum order.
            </p>
        </div>
    </React.Fragment>
  );
}
