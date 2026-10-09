import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l41hwx-3b.css';
import '../../css/x/xwlwi5bcz.css';
import '../../css/c/cg2mevbgr.css';
import '../../css/x/x4z9uobeb.css';
import '../../css/v/vx_c1fbga.css';
import '../../css/y/yaxfqg-ge.css';
import '../../css/j/jgj5pa4ih.css';
import '../../css/g/gsyd5vmtp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l41hwx-3b"/><path class="xwlwi5bcz"/><path class="cg2mevbgr"/><path class="x4z9uobeb"/><path class="vx_c1fbga"/><path class="yaxfqg-ge"/><path class="jgj5pa4ih"/><path class="gsyd5vmtp"/>`,
		"fallback": "energy-icons:wind-turbine-plus-48-bold",
	});
}

export default Component;
