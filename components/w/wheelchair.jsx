import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft_1ibnio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft_1ibnio"/>`,
		"fallback": "grommet-icons:wheelchair",
	});
}

export default Component;
