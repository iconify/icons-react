import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/n/nnw03yyud.css';
import '../../css/j/jhy412beq.css';
import '../../css/m/mjml-1rkx.css';
import '../../css/q/qg722qjwj.css';
import '../../css/l/ldcsqcbde.css';
import '../../css/w/wxoxzgjis.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="nnw03yyud"/><path class="jhy412beq"/><path class="mjml-1rkx"/><path class="qg722qjwj"/><path class="ldcsqcbde"/><path class="wxoxzgjis"/></g>`,
		"fallback": "icon-park:workbench",
	});
}

export default Component;
