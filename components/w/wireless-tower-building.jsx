import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/azg4gk7yy.css';
import '../../css/r/rkfprj2os.css';
import '../../css/x/xxv23h4tl.css';
import '../../css/g/g_fi3zbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="azg4gk7yy"/><path class="rkfprj2os"/><path class="xxv23h4tl"/><path class="g_fi3zbow"/></g>`,
		"fallback": "streamline-freehand-color:wireless-tower-building",
	});
}

export default Component;
