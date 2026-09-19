import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydtohebyk.css';
import '../../css/m/md286fbip.css';
import '../../css/o/olt_orobs.css';
import '../../css/c/cea2m5o8u.css';
import '../../css/b/bc35tmbvd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ydtohebyk"/><g class="md286fbip"><path class="olt_orobs"/><path class="cea2m5o8u"/><path class="bc35tmbvd"/></g></g>`,
		"fallback": "cryptocurrency-color:xmo",
	});
}

export default Component;
