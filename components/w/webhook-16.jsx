import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yor0a7bzn.css';
import '../../css/h/hir2mbb0k.css';
import '../../css/h/hj176wbmq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yor0a7bzn"/><path class="hir2mbb0k"/><path class="hj176wbmq"/>`,
		"fallback": "octicon:webhook-16",
	});
}

export default Component;
