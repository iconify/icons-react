import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/a_si84u6k.css';
import '../../css/o/oay0_cbfh.css';
import '../../css/c/cylw_-byz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLPnjfcEt"><g class="wwvp95byt"><path class="a_si84u6k"/><path class="oay0_cbfh"/><path class="cylw_-byz"/></g></mask></defs><path mask="url(#SVGLPnjfcEt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:weixin-shake",
	});
}

export default Component;
