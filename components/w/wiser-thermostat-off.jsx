import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew8qlfbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew8qlfbax"/>`,
		"fallback": "cbi:wiser-thermostat-off",
	});
}

export default Component;
