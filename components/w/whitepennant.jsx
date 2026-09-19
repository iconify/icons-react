import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxbpgacte.css';
import '../../css/k/kmp30jjka.css';
import '../../css/h/hdbm4obld.css';
import '../../css/d/dmmpmib0w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxbpgacte"/><path class="kmp30jjka"/><path class="hdbm4obld"/><path class="dmmpmib0w"/>`,
		"fallback": "fxemoji:whitepennant",
	});
}

export default Component;
