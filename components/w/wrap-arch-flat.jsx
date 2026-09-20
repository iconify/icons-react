import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxnnlndvu.css';
import '../../css/l/l61w9wbpa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxnnlndvu"/><path class="l61w9wbpa"/></g>`,
		"fallback": "streamline-plump-color:wrap-arch-flat",
	});
}

export default Component;
