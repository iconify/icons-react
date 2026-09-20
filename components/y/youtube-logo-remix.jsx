import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee_hsbbuo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ee_hsbbuo"/>`,
		"fallback": "streamline-flex:youtube-logo-remix",
	});
}

export default Component;
