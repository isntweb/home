import React from 'react';
import * as Select from '@radix-ui/react-select';
import { cx } from '../../utils';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import classes from './select.module.scss';

const MySelect = ( { label, options, setOption, selected, className }) => (
  <Select.Root
    className={className}
    value={selected}
    onValueChange={setOption}
    name={label}
  >
    <Select.Trigger className={classes.selectTrigger} aria-label={label}>
      <Select.Value value={selected.name} />
      <Select.Icon className={classes.selectIcon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={classes.selectContent}>
        <Select.Viewport className={classes.selectViewport}>
          <Select.Group>
            {options.map((option) => (
              <SelectItem
                value="option"
                className={classes.selectOption}
                key={option.name}
                value={option}
              >
                {option.name}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={cx(classes.selectItem, className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={classes.selectItemIndicator}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default MySelect;
