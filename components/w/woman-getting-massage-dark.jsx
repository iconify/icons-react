import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc64mfb7f.css';
import '../../css/m/m-x0c3bnk.css';
import '../../css/u/u_mqk8o8p.css';
import '../../css/q/qy7xu79wv.css';
import '../../css/r/rion5h8kd.css';
import '../../css/i/iqbfigbmy.css';
import '../../css/e/e8015uj1a.css';
import '../../css/z/zztf2ccag.css';
import '../../css/n/ni1zysb2q.css';
import '../../css/j/j8boa3vzz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pc64mfb7f"/><path class="m-x0c3bnk"/><path class="u_mqk8o8p"/><path class="qy7xu79wv"/><path class="rion5h8kd"/><path class="iqbfigbmy"/><path class="e8015uj1a"/><path class="zztf2ccag"/><path class="ni1zysb2q"/><path class="j8boa3vzz"/></g>`,
		"fallback": "fluent-emoji-flat:woman-getting-massage-dark",
	});
}

export default Component;
