/* @ds-bundle: {"format":4,"namespace":"IMPROSPDesignSystem_8fc605","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"21015ba0a122","components/core/Button.jsx":"510e93aebc92","components/core/Card.jsx":"0ad1f903ee5e","components/core/Divider.jsx":"cfddf5a9ef3d","components/core/SectionHeader.jsx":"d3a1d9cdbddd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IMPROSPDesignSystem_8fc605 = window.IMPROSPDesignSystem_8fc605 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — rubber-stamp label ("carimbo"): rough torn-edge mask, rotated
 * slightly, heavy border. Use for stamps like "ENTRADA LIVRE", "ESGOTADO",
 * "USO INTERNO" — never a rounded pill.
 */
function Badge({
  children,
  color = 'accent',
  rotate = -4
}) {
  const colorMap = {
    accent: 'var(--color-accent)',
    ink: 'var(--color-fg)',
    paper: 'var(--color-fg-inverse)'
  };
  const c = colorMap[color] || color;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--text-body)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      fontSize: 14,
      color: c,
      border: `var(--border-width-md) solid ${c}`,
      padding: '6px 13px',
      transform: `rotate(${rotate}deg)`,
      WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='60'%3E%3Cfilter id='r'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.35' numOctaves='3'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 .6 1 1 1 1 1 1'/%3E%3C/feComponentTransfer%3E%3CfeComposite operator='in' in2='SourceGraphic'/%3E%3C/filter%3E%3Crect width='200' height='60' fill='%23000' filter='url(%23r)'/%3E%3C/svg%3E\")",
      WebkitMaskSize: 'cover'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button — the brand's primary call-to-action.
 * Square corners always, heavy border, Coolvetica caps + wide tracking
 * (the brand's "service voice"). Hover simply inverts fg/bg — no fades,
 * no gradients, no shadows.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false
}) {
  const pad = size === 'sm' ? '8px 16px' : size === 'lg' ? '18px 32px' : '13px 24px';
  const fontSize = size === 'sm' ? 12.5 : size === 'lg' ? 16 : 14;
  const base = {
    fontFamily: 'var(--text-body)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-label)',
    fontSize,
    padding: pad,
    border: 'var(--border-width-md) solid var(--color-border)',
    borderRadius: 'var(--radius)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background .08s linear, color .08s linear',
    display: 'inline-block'
  };
  const variants = {
    primary: {
      background: 'var(--color-accent)',
      color: '#fff',
      borderColor: 'var(--color-accent)'
    },
    secondary: {
      background: 'var(--color-bg)',
      color: 'var(--color-fg)',
      borderColor: 'var(--color-border)'
    },
    inverse: {
      background: 'var(--color-bg-inverse)',
      color: 'var(--color-fg-inverse)',
      borderColor: 'var(--color-fg-inverse)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-accent)',
      borderColor: 'var(--color-accent)'
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    style: style,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') {
        e.currentTarget.style.background = 'var(--tinta)';
        e.currentTarget.style.borderColor = 'var(--tinta)';
      } else if (variant === 'secondary') {
        e.currentTarget.style.background = 'var(--tinta)';
        e.currentTarget.style.color = '#fff';
      } else if (variant === 'inverse') {
        e.currentTarget.style.background = 'var(--color-accent)';
        e.currentTarget.style.borderColor = 'var(--color-accent)';
        e.currentTarget.style.color = '#fff';
      } else if (variant === 'ghost') {
        e.currentTarget.style.background = 'var(--color-accent)';
        e.currentTarget.style.color = '#fff';
      }
    },
    onMouseLeave: e => {
      Object.assign(e.currentTarget.style, style);
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Card — the brand's "cartao": solid border, no radius, no soft shadow.
 * `inverse` fills with ink for a callout/highlight card.
 */
function Card({
  label,
  title,
  children,
  inverse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-width-md) solid var(--color-border)',
      background: inverse ? 'var(--color-bg-inverse)' : 'var(--color-bg)',
      color: inverse ? 'var(--color-fg-inverse)' : 'var(--color-fg)',
      borderColor: inverse ? 'var(--color-bg-inverse)' : 'var(--color-border)',
      padding: 'var(--sp-4)',
      position: 'relative',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--text-body)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-service)',
      fontSize: 13.5,
      display: 'block',
      marginBottom: 8,
      color: 'var(--color-accent)'
    }
  }, label), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--text-display)',
      textTransform: 'uppercase',
      fontSize: 20,
      lineHeight: 1.3,
      letterSpacing: '.3px',
      margin: '0 0 var(--sp-6)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.5
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * Divider — inline underline highlight, the brand's #1 graphic gesture:
 * a thick colored band sitting under (never behind) the text baseline.
 * Wrap the word/phrase you want to underline.
 */
function Divider({
  children,
  color = 'white',
  as: As = 'span'
}) {
  const fill = color === 'white' ? '#fff' : 'var(--color-accent)';
  return /*#__PURE__*/React.createElement(As, {
    style: {
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone',
      backgroundImage: `linear-gradient(${fill}, ${fill})`,
      backgroundRepeat: 'no-repeat',
      /* fixed band thickness in em units, anchored just above the
         baseline — independent of the font's ascent/descent metrics,
         which is what breaks at display sizes with percentage stops */
      backgroundSize: '100% 0.22em',
      backgroundPosition: '0 82%'
    }
  }, children);
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
/**
 * SectionHeader — the "cap" chapter header: number + name + a rotated
 * hand-written note, all sitting on a heavy top rule.
 */
function SectionHeader({
  number,
  name,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      borderTop: 'var(--border-width-lg) solid currentColor',
      paddingTop: 14,
      marginBottom: 'clamp(32px,5vw,64px)',
      flexWrap: 'wrap'
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--text-display)',
      fontSize: 'clamp(42px,6vw,76px)',
      lineHeight: 0.85,
      color: 'var(--color-accent)'
    }
  }, number), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--text-display)',
      fontSize: 'clamp(32px,5.2vw,60px)',
      lineHeight: 0.9,
      textTransform: 'uppercase',
      margin: 0
    }
  }, name), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--text-hand)',
      fontSize: 'clamp(17px,1.9vw,23px)',
      color: 'var(--color-accent)',
      transform: 'rotate(-2deg)',
      marginLeft: 'auto'
    }
  }, note));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

})();
