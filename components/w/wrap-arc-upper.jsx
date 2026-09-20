import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7wolhbsk.css';
import '../../css/s/s12jwgbli.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a7wolhbsk"/><path class="s12jwgbli"/></g>`,
		"fallback": "streamline-flex-color:wrap-arc-upper",
	});
}

export default Component;
