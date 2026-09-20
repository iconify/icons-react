import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcltkcfug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcltkcfug"/>`,
		"fallback": "simple-icons:wise",
	});
}

export default Component;
