import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sra7u5brr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sra7u5brr"/>`,
		"fallback": "streamline-plump:webcam-off-solid",
	});
}

export default Component;
