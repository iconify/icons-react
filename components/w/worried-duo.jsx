import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t8duj-sdt.css';
import '../../css/g/gybudlb5c.css';
import '../../css/u/ulnr9lfjv.css';
import '../../css/x/x_b7gqbqv.css';
import '../../css/f/fye1ff7ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t8duj-sdt"/><path class="gybudlb5c wm-s"/><path class="ulnr9lfjv wm-s"/><path class="x_b7gqbqv"/><path class="fye1ff7ya wm-a"/></g>`,
		"fallback": "withicons:worried-duo",
	});
}

export default Component;
