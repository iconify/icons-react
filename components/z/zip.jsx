import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/x/x26h1bcsq.css';
import '../../css/k/krktdhbhc.css';
import '../../css/p/p49jg_bkb.css';
import '../../css/k/kbzffqb0y.css';
import '../../css/t/tyj92tbdu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="x26h1bcsq"/><path class="krktdhbhc"/><path clip-rule="evenodd" class="p49jg_bkb"/><path class="kbzffqb0y"/><path class="tyj92tbdu"/></g>`,
		"fallback": "icon-park:zip",
	});
}

export default Component;
