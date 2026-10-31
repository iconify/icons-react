import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jr1uoibuh.css';
import '../../css/g/gytpzobyc.css';
import '../../css/q/qe44uebkj.css';
import '../../css/z/ztp2rcb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRlhuzCkJ" x1="9" x2="15" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGRlhuzCkJ)" class="jr1uoibuh"/><path class="gytpzobyc wm-shine"/><path class="qe44uebkj wm-shine"/><path class="wm-shine ztp2rcb3o"/></g>`,
		"fallback": "withicons-utsav:zap-off",
	});
}

export default Component;
