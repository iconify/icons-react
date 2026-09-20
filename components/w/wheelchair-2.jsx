import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xpp38abml.css';
import '../../css/q/qw2dtgbxp.css';
import '../../css/c/c3td6wbvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="xpp38abml"/><path class="qw2dtgbxp"/><path class="c3td6wbvr"/></g>`,
		"fallback": "streamline-plump:wheelchair-2",
	});
}

export default Component;
