import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/njb3w4q6i.css';
import '../../css/a/awcdv2e8t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="njb3w4q6i"/><path class="awcdv2e8t"/></g>`,
		"fallback": "streamline-plump-color:widget-flat",
	});
}

export default Component;
