import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uijxekb5x.css';
import '../../css/q/qc2z89dca.css';
import '../../css/c/cpvctcban.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uijxekb5x"/><path class="qc2z89dca"/><path class="cpvctcban"/></g>`,
		"fallback": "fluent-emoji-flat:womans-clothes",
	});
}

export default Component;
