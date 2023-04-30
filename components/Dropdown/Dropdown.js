import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import './styles.css';

const DropdownMenu = ( { options, setOption } ) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className{classes.iconButton} aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={classes.dropdownMenuContent} sideOffset={5}>
        {options.map((option) => (
          <DropdownMenu.Item className={classes.dropdownMenuItem}>
                {option.name}
                <div className={classes.rightSlot}>
                    {option.selected ? <CheckIcon /> : <DotFilledIcon />}
                </div>
            </DropdownMenu.Item>
        ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
