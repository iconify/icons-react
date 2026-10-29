import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x_b7gqbqv.css';
import '../../css/f/fye1ff7ya.css';
import '../../css/u/ulnr9lfjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x_b7gqbqv"/><path class="fye1ff7ya wm-a"/><path class="ulnr9lfjv wm-s"/></g>`,
		"fallback": "withicons:worried",
	});
}

export default Component;
