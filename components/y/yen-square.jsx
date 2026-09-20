import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrvoa6bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrvoa6bam"/>`,
		"fallback": "mynaui:yen-square",
	});
}

export default Component;
