import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs0efx8dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs0efx8dm"/>`,
		"fallback": "grommet-icons:x",
	});
}

export default Component;
