import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc9t7kxii.css';
import '../../css/w/w8f4ixb7l.css';
import '../../css/y/yg36_wk-k.css';
import '../../css/c/cysm2h5om.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/e/eu4mv5b9d.css';
import '../../css/e/eatnsbcbj.css';
import '../../css/r/ro24r9byh.css';
import '../../css/q/qhnmgpban.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="dc9t7kxii"/><path class="w8f4ixb7l"/><circle class="yg36_wk-k"/><circle class="cysm2h5om"/><g class="x8poo_bjf"><path class="eu4mv5b9d"/><path class="eatnsbcbj"/><circle class="ro24r9byh"/><circle class="qhnmgpban"/></g>`,
		"fallback": "openmoji:yin-yang",
	});
}

export default Component;
