import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqx_ffbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqx_ffbch"/>`,
		"fallback": "cbi:wink-tv",
	});
}

export default Component;
