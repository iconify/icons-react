import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnmfzn60f.css';
import '../../css/t/tbfjszvql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vnmfzn60f"/><circle class="tbfjszvql"/></g>`,
		"fallback": "icon-park-outline:wind-turbine",
	});
}

export default Component;
