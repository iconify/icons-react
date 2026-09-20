import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1st-obsh.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/p/pvue1ejtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="g1st-obsh"/><circle class="zv6cqnbnp"/><path class="pvue1ejtp"/></g>`,
		"fallback": "lucide:webcam",
	});
}

export default Component;
