import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2ynf1bfe.css';
import '../../css/b/b7zywacgj.css';
import '../../css/o/o2o1avb3g.css';
import '../../css/l/lo-d6dbbx.css';
import '../../css/a/aczdb44rv.css';
import '../../css/p/pioi3cnkl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s2ynf1bfe"/><path class="b7zywacgj"/><path class="o2o1avb3g"/><path class="lo-d6dbbx"/><path class="aczdb44rv"/><path class="pioi3cnkl"/></g>`,
		"fallback": "fluent-emoji-flat:zebra",
	});
}

export default Component;
