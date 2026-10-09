import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l41hwx-3b.css';
import '../../css/d/dztgh4bcl.css';
import '../../css/b/b1sfwsxyj.css';
import '../../css/a/alivzijug.css';
import '../../css/v/vx_c1fbga.css';
import '../../css/y/yaxfqg-ge.css';
import '../../css/h/h5s-76m0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l41hwx-3b"/><path class="dztgh4bcl"/><path class="b1sfwsxyj"/><path class="alivzijug"/><path class="vx_c1fbga"/><path class="yaxfqg-ge"/><path class="h5s-76m0p"/>`,
		"fallback": "energy-icons:wind-turbine-alert-48-bold",
	});
}

export default Component;
