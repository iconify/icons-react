import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-kg8npvp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-kg8npvp"/>`,
		"fallback": "streamline-plump:webcam-video",
	});
}

export default Component;
