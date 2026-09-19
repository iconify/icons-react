import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8vni4f1g.css';
import '../../css/d/dmvzikxdx.css';
import '../../css/m/md286fbip.css';
import '../../css/h/h9mxanb4g.css';
import '../../css/i/iw4abdb1c.css';
import '../../css/v/v6ygm57ke.css';
import '../../css/w/w89xt33kj.css';
import '../../css/z/z0c-1sbye.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8vni4f1g"/><path class="dmvzikxdx"/><g class="md286fbip"><path class="h9mxanb4g"/><path class="iw4abdb1c"/><path class="v6ygm57ke"/><path class="w89xt33kj"/></g><circle class="z0c-1sbye"/>`,
		"fallback": "fxemoji:womanshat",
	});
}

export default Component;
