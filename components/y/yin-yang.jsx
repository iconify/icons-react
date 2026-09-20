import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/z/zbry1tb4j.css';
import '../../css/a/azi3iv49n.css';
import '../../css/b/b2nq9zcxn.css';
import '../../css/q/qkgrc8bmh.css';
import '../../css/e/eg1h7xbwj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="zbry1tb4j"/><path class="azi3iv49n"/><path class="b2nq9zcxn"/><path class="qkgrc8bmh"/><path class="eg1h7xbwj"/></g>`,
		"fallback": "streamline-kameleon-color:yin-yang",
	});
}

export default Component;
