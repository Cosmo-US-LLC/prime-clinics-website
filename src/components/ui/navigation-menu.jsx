import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";

function NavigationMenu({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("relative z-20 flex items-center justify-center", className)}
      {...props}
    />
  );
}

const NavigationMenuList = React.forwardRef(function NavigationMenuList(
  { className, ...props },
  ref,
) {
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
});

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = React.forwardRef(
  function NavigationMenuTrigger({ className, children, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent px-3 py-2 hover:bg-slate-50",
          className,
        )}
        {...props}
      >
        {children}
      </NavigationMenuPrimitive.Trigger>
    );
  },
);

const NavigationMenuContent = React.forwardRef(
  function NavigationMenuContent({ className, ...props }, ref) {
    return (
      <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
          "absolute left-1/2 top-full mt-2 w-[520px] -translate-x-1/2 rounded-2xl bg-white shadow-xl border border-slate-200 p-4",
          className,
        )}
        {...props}
      />
    );
  },
);

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
};

