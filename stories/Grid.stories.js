import { FilledInput } from '@mui/material';
import { within, userEvent } from '@storybook/testing-library';
import Grid from '../components/Grid';

let component = {
    title: "Grid",
    component: Grid,
    argTypes: {onClick: {action: "handleViewSource"}},
}

export default component;

const Template = args => <Grid {...args} />

export const row_spacing_2 = Template.bind({});
row_spacing_2.args = {
    alignTitle: "center",
    rowSpacing: 2,
}

export const show_backdrop_clicked = Template.bind({});
show_backdrop_clicked.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', {
        name: /show backdrop/i
    }));
  };

