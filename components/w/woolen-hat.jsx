import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xv2ljac3j.css';
import '../../css/y/y_wfd6myf.css';
import '../../css/z/zngkndb6s.css';
import '../../css/e/eq5lncc3p.css';
import '../../css/b/b62w8-blj.css';
import '../../css/w/wvy3z0x3m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="xv2ljac3j"/><path class="y_wfd6myf"/><path class="zngkndb6s"/><path class="eq5lncc3p"/><circle class="b62w8-blj"/><path class="wvy3z0x3m"/></g>`,
		"fallback": "icon-park:woolen-hat",
	});
}

export default Component;
