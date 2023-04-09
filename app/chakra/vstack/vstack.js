import './vstack.css';
import { v4 as uuidv4 } from 'uuid';

export default function VStack({ variant = '', spacing = 0, children }) {
  const size = spacing * 5 + 'px';
  const className = `margintop${size}`;
  let stackClassName = '-vstack';
  switch (variant) {
    case '$width45rem':
      stackClassName = '-vstack width45rem';
      break;
    case '$width35_75rem$marginlleft0_5rem':
      stackClassName = '-vstack width35_75rem marginleft0_5rem';
    default:
      break;
  }

  return (
    <div className={stackClassName}>
      {children.map((child, index) =>
        index === 0 ? (
          <div key={uuidv4()} className='margintop0px'>
            {child}
          </div>
        ) : (
          <div key={uuidv4()} className={className}>
            {child}
          </div>
        )
      )}
    </div>
  );
}
