import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v_cyp7bey.css';
import '../../css/k/kva043bzk.css';
import '../../css/t/t26d7g3rg.css';
import '../../css/c/cu1491zmm.css';
import '../../css/o/o5pqkb2dm.css';
import '../../css/h/he1zf30yg.css';
import '../../css/i/iy-m30bpe.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v_cyp7bey"/><path class="kva043bzk"/><path class="t26d7g3rg"/><path class="cu1491zmm"/><path class="o5pqkb2dm"/><path class="he1zf30yg"/><path class="iy-m30bpe"/><path class="rsrhfac5n"/></g>`,
		"fallback": "solar:webcam-off-broken",
	});
}

export default Component;
