import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/g0krt4bbi.css';
import '../../css/t/tusdoybin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="g0krt4bbi"/><path clip-rule="evenodd" class="tusdoybin"/></g>`,
		"fallback": "streamline-plump:wifi",
	});
}

export default Component;
